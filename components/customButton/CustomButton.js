import { styled } from "@mui/material/styles"
import Button from "@mui/material/Button"

export const CustomButton = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	fontSize: 16,
	color: "#000",
	backgroundColor: "#fff",
	marginTop: 9,
	marginLeft: 10,
	fontFamily: [
		"-apple-system",
		"BlinkMacSystemFont",
		'"Segoe UI"',
		"Roboto",
		'"Helvetica Neue"',
		"Arial",
		"sans-serif",
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(","),
	"&:hover": {
		backgroundColor: "#dfdfdf",
		borderColor: "#dfdfdf",
		boxShadow: "none",
	},
})

export const CustomButton2 = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	fontSize: 16,
	color: "#000",
	backgroundColor: "#d5d9e0",
	borderColor: "#d5d9e0",
	marginTop: 9,
	marginLeft: 10,
	fontFamily: [
		"-apple-system",
		"BlinkMacSystemFont",
		'"Segoe UI"',
		"Roboto",
		'"Helvetica Neue"',
		"Arial",
		"sans-serif",
		'"Apple Color Emoji"',
		'"Segoe UI Emoji"',
		'"Segoe UI Symbol"',
	].join(","),
	"&:hover": {
		backgroundColor: "#4f6a8f",
		borderColor: "#4f6a8f",
		boxShadow: "none",
	},
})
