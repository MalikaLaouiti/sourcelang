import { Rule } from "@sanity/types";

const messageType = {
  name: "message",
  title: "Messages",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      readOnly: true,
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: Rule) => Rule.email(),
      readOnly: true,
    },
    {
      name: "message",
      title: "Message",
      type: "text",
      readOnly: true,
    },
  ],
};

export default messageType;
