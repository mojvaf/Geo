function Message({ message }) {
  return (
    <p className="text-center text-[1.8rem] w-[80%] my-[2rem] mx-auto font-semibold">
      <span role="img">👋</span> {message}
    </p>
  );
}

export default Message;
