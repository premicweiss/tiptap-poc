import Mention from "@tiptap/extension-mention";
import suggestions from "./suggestion";

const EXTENSION_NAME = "organization-mention;";

const OrganizationMention = Mention.extend({
  name: EXTENSION_NAME,

  addOptions() {
    return {
      HTMLAttributes: {
        class: "organization-mention",
      },
      renderLabel({ node }) {
        return `${node.attrs.label ?? node.attrs.id}`;
      },
      suggestion: {
        ...this.parent?.()?.suggestion,
        ...suggestions(EXTENSION_NAME),
      },
    };
  },
});

export default OrganizationMention;
