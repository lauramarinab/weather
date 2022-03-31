type MicroInteractionsViewProps = {};
export const MicroInteractionsView: React.FC<MicroInteractionsViewProps> = () => {
  const id = "161131088-16ff487d-298b-45bc-bfde-277d6913cf30";
  return (
    <div>
      <video controls width="768">
        <source src={`${process.env.NEXT_PUBLIC_GITHUB_ASSETS_PATH}${id}.mov`} type="video/webm" />

        <source src={`${process.env.NEXT_PUBLIC_GITHUB_ASSETS_PATH}${id}.mov`} type="video/mp4" />
      </video>
    </div>
  );
};
