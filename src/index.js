export default {
  renderNode(inProps, inEditor, inNext) {
    const { children, isFocused, isSelectecd, ...attributes } = inProps;
    const value = inProps.node.data.get('value');
    switch (inProps.node.type) {
      case 'image':
        return (
          <figure {...attributes} className={'slate-plugin-image-node'}>
            <img src={value} width="100%" />
            <figcaption>{children}</figcaption>
          </figure>
        );
      default:
        return inNext();
    }
  }
};
