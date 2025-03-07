const fs = require("fs");
const path = require("path");

// Get module name from command line arguments
const moduleName = process.argv[2];

if (!moduleName) {
  console.error("❌ Error: Please provide a module name.");
  console.log("Usage: node createModule.js <module-name>");
  process.exit(1);
}

// Capitalize first letter
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const ModuleName = capitalize(moduleName);

// Define paths
const moduleDir = path.join(__dirname, "src", "modules", moduleName);
const folders = ["components", "hooks", "pages", "services", "states", "utils"];

// Create module directories
folders.forEach((folder) => {
  const folderPath = path.join(moduleDir, folder);
  fs.mkdirSync(folderPath, { recursive: true });
});

// Component file
const componentContent = `import React from "react";

export default function ${ModuleName}Component() {
  return <div>${ModuleName} Component</div>;
};`;

fs.writeFileSync(
  path.join(moduleDir, "components", `${ModuleName}Component.tsx`),
  componentContent
);

// Custom Hook
const hookContent = `import { useState } from "react";

export function use${ModuleName}() {
  const [state, setState] = useState(null);
  return { state, setState };
};`;

fs.writeFileSync(
  path.join(moduleDir, "hooks", `use${ModuleName}.ts`),
  hookContent
);

// Routes file
const routesContent = `import React from "react";
import { RouteObject } from "react-router-dom";
import ${ModuleName}Component from "../components/${ModuleName}Component";

const ${ModuleName}Routes: RouteObject[] = [
  {
    path: "${moduleName}",
    element: <${ModuleName}Component />,
  },
];

export default ${ModuleName}Routes;`;

fs.writeFileSync(path.join(moduleDir, "routes.tsx"), routesContent);

console.log(
  `✅ Module '${moduleName}' created successfully in 'src/modules/${moduleName}' with routes.tsx`
);
