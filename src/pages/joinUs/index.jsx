import JoinUsButton from "../../components/joinUsButton";
import JoinUsInput from "../../components/joinUsInput";

const JoinUs = () => {
  return (
    <div className="flex justify-center h-screen bg-[#F4F4F4]">
      <div className=" w-[480px] h-[655px] bg-white rounded-[8px] justify-center flex">
        <div className="content w-[416px] flex flex-col justify-between py-[32px]">
          <JoinUsInput />
          <JoinUsButton />
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
