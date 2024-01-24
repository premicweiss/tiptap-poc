import { Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import FooterNodeView from "./FooterNodeView";

interface CustomFooterAttributes {
  count: number;
  style?: string;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    customFooter: {
      /**
       * Toggle header command
       */
      toggleFooter: (attributes?: CustomFooterAttributes) => ReturnType;
      addFooterNode: (attributes: CustomFooterAttributes) => ReturnType;
    };
  }
}

export default Node.create({
  name: "customFooter",
  content: "inline*",
  marks: "bold italic",
  group: "block",

  addAttributes() {
    return {
      count: {
        default: 5,
      },
    };
  },

  addCommands() {
    return {
      toggleFooter:
        (attributes) =>
        ({ commands }) => {
          return commands.toggleNode(this.name, "paragraph", attributes);
        },
      addFooterNode:
        (attributes) =>
        ({ commands }) => {
          return commands.insertContentAt(
            this.editor.state.selection.head + 1,
            { type: this.name, attrs: attributes }
          );
        },
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-y": () => this.editor.commands.toggleFooter({ count: 0 }),
    };
  },

  parseHTML() {
    return [
      {
        tag: "react-component",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["react-component", HTMLAttributes];
  },

  addNodeView() {
    return ReactNodeViewRenderer(FooterNodeView);
  },
});
