import { TIconProps } from "../../types"
const FolderInputIcon: React.FC<TIconProps> = ({ className, props }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#BFDAE8"
      stroke="#01649B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={66.667}
      strokeWidth={0.75}
      d="M3 5.356V19.61l2.295-8.94h13.651V8.013a.826.826 0 0 0-.845-.845H11.94L9.644 4.389H3.846c-.484 0-.846.363-.846.967Z"
    />
    <path
      fill="#7CB4CC"
      stroke="#01649B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={66.667}
      strokeWidth={0.75}
      d="M19.188 19.61 21 10.67H5.175L3 19.61h16.188Z"
    />
  </svg>
)
export default FolderInputIcon
