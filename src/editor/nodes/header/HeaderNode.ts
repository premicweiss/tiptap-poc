import { Node } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    customHeader: {
      /**
       * Toggle header command
       */
      toggleHeader: (attributes?: { style: any }) => ReturnType;
    };
  }
}

export default Node.create({
  name: "customHeader",
  content: "inline*",
  marks: "bold italic",
  // group: "block",

  addAttributes() {
    return {
      style: {
        default: "color: purple;",
      },
    };
  },
  addCommands() {
    return {
      toggleHeader:
        (attributes) =>
        ({ commands }) => {
          return commands.toggleNode(this.name, "paragraph", attributes);
        },
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-u": () => this.editor.commands.toggleHeader(),
    };
  },

  parseHTML() {
    return [
      {
        tag: "header",
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["header", HTMLAttributes, 0];
  },
});
