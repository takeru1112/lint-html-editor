import { TextlintKernel } from "@textlint/kernel";
const textlintKernel = new TextlintKernel();
let lintOption = {};
function createRules(rules, ruleOptions) {
  return Object.keys(rules).map(name => {
    return {
      ruleId: name,
      rule: rules[name],
      options: ruleOptions[name] || true
    };
  });
}
export function execLint(text) {
  lintOption = Object.assign(
    {},
    {
      plugins: [
        {
          pluginId: "html",
          plugin: require("textlint-plugin-html")
        }
      ],
      ext: ".html"
    }
  );
  return textlintKernel.lintText(text, lintOption);
}
