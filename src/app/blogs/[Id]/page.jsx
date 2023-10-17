import css from "./style.module.css";

const Blogid = ({ params }) => {
  console.log(params);

  return (
    <div className={css.conatiner}>
      <div>
        <h1 className={css.head}>Blog Inside</h1>
      </div>
    </div>
  );
};

export default Blogid;
