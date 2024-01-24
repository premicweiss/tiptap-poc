import { FC } from "react";
import { NodeViewRendererProps, NodeViewWrapper } from "@tiptap/react";
import styled from "@emotion/styled";

interface ContactMentionNodeViewProps extends NodeViewRendererProps {
  className?: string;
}

const ContactMentionNodeView: FC<ContactMentionNodeViewProps> = ({
  className,
  node,
}) => {
  return (
    <NodeViewWrapper className={className} contentEditable={false}>
      <p>{node.attrs.id}</p>
    </NodeViewWrapper>
  );
};

export default styled(ContactMentionNodeView)`
  background: yellowgreen;
`;
