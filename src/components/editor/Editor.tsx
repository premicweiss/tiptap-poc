import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { HocuspocusProvider } from "@hocuspocus/provider";
import Document from "@tiptap/extension-document";
import { EditorProvider, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC, useMemo } from "react";
import ContactMention from "../../editor/extensions/contact-mention/ContactMention";
import OrganizationMention from "../../editor/extensions/organization-mention/OrganizationMention";
import FooterNode from "../../editor/nodes/footer/FooterNode";
import HeaderNode from "../../editor/nodes/header/HeaderNode";
import HeadingNode from "../../editor/nodes/heading/HeadingNode";
import MenuBar from "./MenuBar";

import Collaboration from '@tiptap/extension-collaboration';
import CollaborationCursor from '@tiptap/extension-collaboration-cursor';
import { IndexeddbPersistence } from "y-indexeddb";
import * as Y from 'yjs';


const user = { name: "User " + Math.random(), color: "#" + Math.floor(Math.random() * 16777215).toString(16) };
const Editor: FC<{ className?: string }> = ({ className }) => {
  const doc = useMemo(() => new Y.Doc(), [])

  useMemo(() => { new IndexeddbPersistence('example-document', doc) }, [doc])
  const provider = useMemo(() => {
    return new HocuspocusProvider({
      url: "ws://127.0.0.1:1235",
      name: "doc123",
      document: doc
    })
  }, [doc])


  const extensions = useMemo(() => {
    return [
      Collaboration.configure({
        document: doc,
      }),
      // Collab cursor data
      CollaborationCursor.configure({
        provider: provider,
        user
      }),
      StarterKit.configure({ heading: false, document: false, history: false }),
      Document.extend({
        content: "customHeader block*",
      }),
      HeaderNode,
      FooterNode,
      HeadingNode.configure({
        levels: [1, 3],
      }),
      OrganizationMention,
      ContactMention,
    ]
  }, [doc, provider]);

  return (
    <div className={className}>
      <EditorProvider
        extensions={extensions}
        slotBefore={<MenuBar />}
      >
        <FloatingMenu
          className="floating-menu"
          tippyOptions={{ duration: 100 }}
        >
          Floating menu content
        </FloatingMenu>
      </EditorProvider>
    </div>
  );
};

export default styled(Editor)(
  () => css`
    padding: 20px 40px;

    .tiptap {
      min-height: 700px;
      border: 3px solid black;
      border-radius: 10px;
      padding: 10px;

      .contact-mention {
        border: 1px solid green;
        border-radius: 5px;
        border-width: 2px;
        padding: 3px;
      }
      .organization-mention {
        border: 1px solid blue;
        border-radius: 5px;
        border-width: 2px;
        padding: 3px;
      }

      header {
        font-size: 22px;
        /* color: purple; */
      }

      footer {
        font-size: 25px;
        /* color: purple; */
      }

      ul[data-type="taskList"] {
        list-style: none;
        padding: 0;

        p {
          margin: 0;
        }

        li {
          display: flex;

          > label {
            flex: 0 0 auto;
            margin-right: 0.5rem;
            user-select: none;
          }

          > div {
            flex: 1 1 auto;
          }

          ul li,
          ol li {
            display: list-item;
          }

          ul[data-type="taskList"] > li {
            display: flex;
          }
        }
      }
    }

    .floating-menu {
      font-size: 12px;
      color: gray;
    }

    /* Placeholder (at the top) */
    .tiptap p.is-editor-empty:first-of-type::before {
      color: #adb5bd;
      content: attr(data-placeholder);
      float: left;
      height: 0;
      pointer-events: none;
    }

    /* Give a remote user a caret */
    .collaboration-cursor__caret {
      border-left: 1px solid #0d0d0d;
      border-right: 1px solid #0d0d0d;
      margin-left: -1px;
      margin-right: -1px;
      pointer-events: none;
      position: relative;
      word-break: normal;
    }

    /* Render the username above the caret */
    .collaboration-cursor__label {
      border-radius: 3px 3px 3px 0;
      color: #0d0d0d;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      left: -1px;
      line-height: normal;
      padding: 0.1rem 0.3rem;
      position: absolute;
      top: -1.4em;
      user-select: none;
      white-space: nowrap;
    }
  `
);
