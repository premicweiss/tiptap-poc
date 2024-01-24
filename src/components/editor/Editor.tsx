import { FC, useMemo } from "react";
import Document from "@tiptap/extension-document";
import { EditorProvider, FloatingMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import MenuBar from "./MenuBar";
import HeadingNode from "../../editor/nodes/heading/HeadingNode";
import HeaderNode from "../../editor/nodes/header/HeaderNode";
import FooterNode from "../../editor/nodes/footer/FooterNode";
import ContactMention from "../../editor/extensions/contact-mention/ContactMention";
import OrganizationMention from "../../editor/extensions/organization-mention/OrganizationMention";

const Editor: FC<{ className?: string }> = ({ className }) => {
  const content = useMemo(() => {
    return {
      type: "doc",
      content: [
        {
          type: "customHeader",
          attrs: {
            style: "color: purple;",
          },
        },
        {
          type: "customFooter",
          attrs: {
            count: 5,
          },
        },
        {
          type: "customFooter",
          attrs: {
            count: 2.7220609337325508,
          },
        },
      ],
    };
  }, []);

  const extensions = [
    StarterKit.configure({ document: false }),
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
  ];

  const onEditorUpdate = ({ editor }: { editor: any }) => {
    console.log(editor.getJSON());
  };

  return (
    <div className={className}>
      <EditorProvider
        content={content}
        onUpdate={(props) => onEditorUpdate(props)}
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
  `
);
