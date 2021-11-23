
export const downloadFile = (data: any) => {
  const aTag = document.createElement("a");
  aTag.setAttribute("href", data);
  aTag.setAttribute("download", "Certificate");
  aTag.click();
  aTag.remove();
};
