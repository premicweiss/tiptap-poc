import Mention from "@tiptap/extension-mention";
import suggestion from "./suggestion";

const EXTENSION_NAME = "contact-mention";

const ContactMention = Mention.extend({
  name: EXTENSION_NAME,

  addOptions() {
    return {
      HTMLAttributes: {
        class: "contact-mention",
      },
      renderLabel({ options, node }) {
        return `${options.suggestion.char}${node.attrs.label ?? node.attrs.id}`;
      },
      suggestion: {
        ...this.parent?.()?.suggestion,
        ...suggestion(EXTENSION_NAME),
      },
    };
  },
});

export default ContactMention;
