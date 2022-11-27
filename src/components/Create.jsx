import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Create = ({ isValid, errors, errTextFn, page }) => {
  const getErrorMessage = () => {
    let errorArr = [];
    for (let err in errors) {
      errorArr.push(errors[err].message);
    }
    let text = Array.from(new Set(errorArr)).join(", ");
    errTextFn(text);
  };

  return (
    <div className="createMovie_create_buttonDiv">
      <motion.button
        onClick={() => page === "createMovie" && getErrorMessage()}
        whileHover={{
          scale: 1.05,
          background:
            "linear-gradient(315deg, rgba(92,219,249,1) 0%, rgba(11,68,144,1) 100%)",
          transition: { duration: 0.05 },
        }}
        whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}
        className={isValid ? "handleButtonReg" : "handleButtonReg disabled"}
      >
        <Link
          to="main_demo"
          spy={false}
          smooth={true}
          offset={50}
          duration={800}
        >
          Show demo
        </Link>
      </motion.button>
    </div>
  );
};

export default Create;
