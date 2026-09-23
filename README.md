# Fabulous

Fabulous is a design skill that combines deliberate art direction, consistent design systems, useful interactions, and visual QA into one repeatable workflow.

It uses four resources when they are available:

- **Frontend Design** for art direction, composition, typography, and visual identity.
- **UI/UX Pro Max** for design systems, UX patterns, accessibility, and responsive behavior.
- **21st MCP** for modern component discovery and interaction patterns.
- **Higgsfield MCP** for custom visual and motion assets.

## What Fabulous does

- Understands the product, audience, and primary action before coding.
- Establishes typography, color, spacing, layout, and component rules.
- Adapts discovered components to the project instead of pasting library demos.
- Uses custom visuals only when they materially improve the experience.
- Checks responsive layouts, accessibility, interaction states, and visual consistency.
- Preserves existing functionality, branding, and project conventions unless asked to change them.

## Requirements

Fabulous works with any AI coding agent that supports instruction-based skills or reusable prompt files. The exact installation folder depends on the agent.

Required resources:

- Frontend Design
- UI/UX Pro Max
- 21st MCP
- Higgsfield MCP

## Install Fabulous

### With the skills CLI

Install it from GitHub with:

```bash
npx skills add aarav-puri/fabulous --skill fabulous
```

Use `-g` for a global install. To make a repository compatible with the CLI, commit this `SKILL.md` at the repository root or under `skills/fabulous/`; its YAML frontmatter already includes `name: fabulous` and a description. This CLI installs the skill, but companion MCP servers still need their own setup.

## Use Fabulous

Invoke it by name if your agent supports skills:

```text
Use Fabulous to build a portfolio for a student developer. Keep the existing
colors, create a distinctive type hierarchy, and check the mobile layout.
```

For an existing interface:

```text
Use Fabulous to redesign this dashboard. Preserve its features, colors, and
fonts. Improve the hierarchy, interaction states, accessibility, and mobile UX.
```

## Connect the companion resources

### Frontend Design

Install the official Frontend Design skill using the method supported by your agent. The reference implementation is available in the [Anthropic skills repository](https://github.com/anthropics/skills/tree/main/skills/frontend-design).

### UI/UX Pro Max

UI/UX Pro Max supports multiple coding agents. Its CLI can generate the correct installation structure:

```bash
npx ui-ux-pro-max-cli init --ai <your-agent>
```

See the [UI/UX Pro Max repository](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) for supported agent names and current setup instructions.

### 21st MCP

Connect 21st MCP using its CLI and select the client that matches your agent:

```bash
npx @21st-dev/cli@latest init --client <your-agent>
```

See [21st MCP setup](https://21st.dev/mcp). After setup, confirm that the 21st tools appear in your agent before asking Fabulous to discover components.

### Higgsfield MCP

Connect Higgsfield MCP using the setup instructions for your AI coding agent, and confirm that its tools appear before asking Fabulous to generate visuals.

See the [Higgsfield documentation](https://docs.higgsfield.ai).

## Troubleshooting

- **Fabulous is not detected:** confirm that `SKILL.md` is inside a `fabulous` folder in the skill path supported by your agent.
- **A companion skill is missing:** install it separately and ask the agent to list the skills it can access.
- **21st MCP is unavailable:** reconnect the MCP server and confirm its tools are visible.
- **Higgsfield MCP is unavailable:** verify the MCP connection and local credentials.
- **The result feels generic:** provide the real audience, content, visual references, and constraints, then ask Fabulous to critique and revise the implementation.

## Repository contents

- `SKILL.md`: the Fabulous skill definition.
- `README.md`: installation, setup, and usage instructions.
- `website/index.html`: the Fabulous website.
- `.gitignore`: excludes secrets and local development files.

## Repository

The Fabulous source is published at [aarav-puri/fabulous](https://github.com/aarav-puri/fabulous).

## Sources

- [Anthropic skills](https://github.com/anthropics/skills)
- [Frontend Design](https://github.com/anthropics/skills/tree/main/skills/frontend-design)
- [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [21st MCP](https://21st.dev/mcp)
- [Higgsfield documentation](https://docs.higgsfield.ai)

Third-party tools retain their own licenses and terms. This repository does not redistribute their code.
