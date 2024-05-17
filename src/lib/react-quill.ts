export const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6] }],
    [{ size: ["small", false, "large", "huge"] }],

    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: "" }, { align: "right" }, { align: "center" }, { align: "justify" }],
    [{ direction: "rtl" }],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
    ["link", "image"],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
  ],
}
