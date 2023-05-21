function resizeImage(link: string, newSize: string) {
  const regex = /\/(\d+x\d+)bb\./;
  const match = link.match(regex);

  if (match) {
    const oldSize: string = match[1];
    const newLink: string = link.replace(oldSize, newSize);
    return newLink;
  }
  return link;
}

export default resizeImage;
