import Mention from "@tiptap/extension-mention";
// import { ReactNodeViewRenderer } from "@tiptap/react";
// import ContactMentionNodeView from "./ContactMentionNodeView";

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

  // Toggle to make this a node view
  // addNodeView() {
  //   return ReactNodeViewRenderer(ContactMentionNodeView);
  // },
});

export default ContactMention;
