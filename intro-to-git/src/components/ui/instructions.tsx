import CodeComparison from "./code-comparison";

const beforeCode = `
//   {
//     id: <next-id>,
//     name: "<Your Name Goes Here>",
//     designation: "<What do you want to be designated goes here>",
//     image:
//       "upload image in public folder and write it's path here, for eg: /images/your-image.jpg",
//   },
`;

const afterCode = `{
    id: 1,
    name: "OSDG Best xD",
    designation: "Club God",
    image: "/images/osdg-best.webp",
    },`;

export function Instructions() {
  return (
    
    <CodeComparison
      beforeCode={beforeCode}
      afterCode={afterCode}
      language="tsx"
      filename="people.tsx"
      lightTheme="github-dark"
      darkTheme="github-dark"
    />
  );
}
