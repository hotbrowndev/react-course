const Overlay = (props) => {
  const onClickBackdropHandler = () => {
    props.closeModal();
  };
  return <div className="backdrop" onClick={onClickBackdropHandler}></div>;
};

export default Overlay;
