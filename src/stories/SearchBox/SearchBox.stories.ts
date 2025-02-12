import type { Meta, StoryObj } from "@storybook/react";
import SearchBox from "../../components/SearchBox/SearchBox";

const meta = {
	title: "Components/SearchBox",
	component: SearchBox,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof SearchBox>;

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
	args: {
		placeholder: "Search...",
	},
};

export const WithCustomPlaceholder: Story = {
	args: {
		placeholder: "검색어를 입력하세요...",
	},
};

export const WithSearchHandler: Story = {
	args: {
		placeholder: "Search...",
		onSearch: () => {},
	},
};
