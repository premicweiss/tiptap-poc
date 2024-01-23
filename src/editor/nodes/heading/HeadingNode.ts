import Heading from "@tiptap/extension-heading";
import { mergeAttributes } from "@tiptap/react";

interface CustomHeadingExtensionOptions {
  levels: number[];
  HTMLAttributes: {
    color?: string;
  };
}

const CustomHeadingExtension = Heading.extend<CustomHeadingExtensionOptions>({
  addAttributes() {
    return {
      color: {
        default: "#00ff00",
      },
    };
  },
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {},
    };
  },
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level);

    const level = hasLevel ? node.attrs.level : this.options.levels[0];

    const attributes = {
      style: `color: ${
        this.options.HTMLAttributes.color || HTMLAttributes.color
      }`,
    };

    return [`h${level}`, mergeAttributes(HTMLAttributes, attributes), 0];
  },
});

export default CustomHeadingExtension;
