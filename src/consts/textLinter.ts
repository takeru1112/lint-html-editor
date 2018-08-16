import { TextlintKernel, TextlintKernelRule } from "@textlint/kernel";
import { TextlintKernelOptions, TextlintRuleModule } from '@textlint/kernel/lib/kernel/src/textlint-kernel-interface';
const textlintKernel = new TextlintKernel();
let lintOption: TextlintKernelOptions = { ext: ".html" };
function createRules(rules: { [key: string]: TextlintRuleModule }, ruleOptions: { [key: string]: any }) {
  return Object.keys(rules).map(name => {
    return {
      ruleId: name,
      rule: rules[name],
      options: ruleOptions[name] || true
    } as TextlintKernelRule;
  });
}
export function execLint(text: string) {
  lintOption = Object.assign(
    {},
    {
      rules: createRules({}, {}),
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
