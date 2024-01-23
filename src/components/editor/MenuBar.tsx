import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useCurrentEditor } from "@tiptap/react";
import { FC } from "react";
import clsx from "clsx";

const MenuBar: FC<{ className?: string }> = ({ className }) => {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className={className}>
      <button
        onClick={() => editor.chain().focus()?.toggleBold().run()}
        // disabled={!editor.can().chain().focus()?.toggleBold()?.run()}
        className={clsx({ active: editor.isActive("bold") })}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus()?.toggleItalic().run()}
        // disabled={!editor.chain().focus().toggleItalic().run()}
        className={clsx({ active: editor.isActive("italic") })}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus()?.toggleStrike().run()}
        // disabled={!editor.chain().focus()?.toggleStrike().run()}
        className={clsx({ active: editor.isActive("strike") })}
      >
        Strike
      </button>
      <button
        onClick={() => editor.chain().focus()?.toggleCode().run()}
        className={clsx({ active: editor.isActive("code") })}
      >
        code
      </button>
      <button
        onClick={() => editor.chain().focus()?.toggleOrderedList().run()}
        className={clsx({ active: editor.isActive("orderedList") })}
      >
        Ordered list
      </button>

      <button
        // onClick={() => editor.chain().focus()?.toggleTaskList().run()}
        className={clsx({ active: editor.isActive("taskList") })}
      >
        Task item
      </button>

      <button
        onClick={() =>
          editor.chain().focus()?.toggleHeading({ level: 1 }).run()
        }
        className={clsx({ active: editor.isActive("heading", { level: 1 }) })}
      >
        H1
      </button>
      <button
        onClick={() =>
          editor.chain().focus()?.toggleHeading({ level: 2 }).run()
        }
        className={clsx({ active: editor.isActive("heading", { level: 2 }) })}
      >
        H2
      </button>
      <button
        onClick={() =>
          editor
            .chain()
            .focus()
            ?.toggleHeader({ style: `background: purple` })
            .run()
        }
        disabled={!editor.can().chain().focus()?.toggleHeader().run()}
        className={clsx({ active: editor.isActive("header") })}
      >
        Header
      </button>

      <button
        onClick={() => editor.chain().focus()?.undo().run()}
        // disabled={!editor.can().chain().focus()?.undo().run()}
      >
        undo
      </button>
    </div>
  );
};

export default styled(MenuBar)(
  () => css`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 10px;

    button {
      padding: 10px;
      border-radius: 7px;
      border: 2px solid black;

      cursor: pointer;

      &.active {
        background: black;
        color: white;
      }
    }
  `
);
