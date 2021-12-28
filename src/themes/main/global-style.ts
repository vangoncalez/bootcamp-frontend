import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

	body {
		background: ${(props) => props.theme.palette.core.secondary};
		font-family: 'Open Sans', sans-serif;
	}

`;
