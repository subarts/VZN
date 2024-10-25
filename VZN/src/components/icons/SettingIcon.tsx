import React from "react"
import { TIconProps } from "../../types"

const SettingIcon: React.FC<TIconProps> = ({ className, ...props }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="m13.5 2 .496-.062A.5.5 0 0 0 13.5 1.5V2Zm-3 0v-.5a.5.5 0 0 0-.496.438L10.5 2Zm3.275 2.198-.496.062a.5.5 0 0 0 .385.425l.11-.487Zm2.487 1.03-.267.423a.5.5 0 0 0 .574-.028l-.307-.395Zm1.748-1.36.354-.353a.5.5 0 0 0-.66-.041l.306.394Zm2.122 2.122.394.307a.5.5 0 0 0-.04-.661l-.354.354Zm-1.36 1.748-.395-.307a.5.5 0 0 0-.028.574l.423-.267Zm1.03 2.487-.487.11a.5.5 0 0 0 .425.386l.063-.496ZM22 10.5h.5a.5.5 0 0 0-.438-.496L22 10.5Zm0 3 .062.496a.5.5 0 0 0 .438-.496H22Zm-2.198.275-.062-.496a.5.5 0 0 0-.425.385l.487.11Zm-1.03 2.487-.423-.267a.5.5 0 0 0 .028.574l.395-.307Zm1.36 1.748.353.354a.5.5 0 0 0 .041-.66l-.394.306Zm-2.122 2.122-.307.394a.5.5 0 0 0 .661-.04l-.354-.354Zm-1.748-1.36.307-.395a.5.5 0 0 0-.574-.028l.267.423Zm-2.487 1.03-.11-.487a.5.5 0 0 0-.386.425l.496.063ZM13.5 22v.5a.5.5 0 0 0 .496-.438L13.5 22Zm-3 0-.496.062a.5.5 0 0 0 .496.438V22Zm-.275-2.198.496-.062a.5.5 0 0 0-.385-.425l-.11.487Zm-2.487-1.03.267-.423a.5.5 0 0 0-.574.028l.307.395Zm-1.748 1.36-.354.353a.5.5 0 0 0 .66.041l-.306-.394ZM3.868 18.01l-.394-.307a.5.5 0 0 0 .04.661l.354-.354Zm1.36-1.748.395.307a.5.5 0 0 0 .028-.574l-.423.267Zm-1.03-2.487.487-.11a.5.5 0 0 0-.425-.386l-.062.496ZM2 13.5h-.5a.5.5 0 0 0 .438.496L2 13.5Zm0-3-.062-.496a.5.5 0 0 0-.438.496H2Zm2.198-.275.062.496a.5.5 0 0 0 .425-.385l-.487-.11Zm1.03-2.487.423.267a.5.5 0 0 0-.028-.574l-.395.307ZM3.868 5.99l-.353-.354a.5.5 0 0 0-.041.66l.394-.306ZM5.99 3.868l.307-.394a.5.5 0 0 0-.661.04l.354.354Zm1.748 1.36-.307.395a.5.5 0 0 0 .574.028l-.267-.423Zm2.487-1.03.11.487a.5.5 0 0 0 .386-.425l-.496-.062ZM13.5 1.5h-3v1h3v-1Zm.77 2.636-.274-2.198-.992.124.275 2.198.992-.124Zm2.258.67a8.453 8.453 0 0 0-2.643-1.096l-.22.975c.838.19 1.624.52 2.33.966l.533-.846Zm.04.817 1.75-1.36-.615-.79-1.748 1.36.614.79Zm1.089-1.401 2.121 2.121.707-.707-2.121-2.121-.707.707Zm2.08 1.46-1.36 1.75.79.613 1.36-1.748-.79-.614Zm.553 4.433a8.452 8.452 0 0 0-1.095-2.643l-.846.533c.445.706.776 1.492.966 2.33l.975-.22Zm1.772-.111-2.198-.275-.124.992 2.198.275.124-.992ZM22.5 13.5v-3h-1v3h1Zm-2.636.77 2.198-.274-.124-.992-2.198.275.125.992Zm-.67 2.258a8.45 8.45 0 0 0 1.096-2.643l-.975-.22a7.454 7.454 0 0 1-.966 2.33l.846.533Zm1.332 1.175-1.36-1.748-.79.614 1.361 1.748.79-.614Zm-2.162 2.782 2.121-2.121-.707-.707-2.121 2.121.707.707Zm-2.41-1.319 1.75 1.36.613-.789-1.748-1.36-.614.79Zm-2.069 1.124a8.45 8.45 0 0 0 2.643-1.095l-.533-.846a7.454 7.454 0 0 1-2.33.966l.22.975Zm.111 1.772.275-2.198-.992-.124-.275 2.198.992.124ZM10.5 22.5h3v-1h-3v1Zm-.77-2.636.274 2.198.992-.124-.275-2.198-.992.125Zm-2.258-.67c.8.505 1.691.88 2.643 1.096l.22-.975a7.453 7.453 0 0 1-2.33-.966l-.533.846Zm-1.175 1.332 1.748-1.36-.614-.79-1.748 1.361.614.79Zm-2.782-2.162 2.121 2.121.707-.707-2.121-2.121-.707.707Zm1.319-2.41-1.36 1.75.789.613 1.36-1.748-.79-.614ZM3.71 13.886c.215.952.59 1.843 1.095 2.643l.846-.533a7.454 7.454 0 0 1-.966-2.33l-.975.22Zm-1.772.111 2.198.275.124-.992-2.198-.275-.124.992ZM1.5 10.5v3h1v-3h-1Zm2.636-.77-2.198.274.124.992 2.198-.275-.124-.992Zm.67-2.258c-.505.8-.88 1.691-1.096 2.643l.975.22c.19-.838.52-1.624.966-2.33l-.846-.533ZM3.473 6.297l1.36 1.748.79-.614-1.361-1.748-.79.614Zm2.162-2.782L3.515 5.636l.707.707 2.121-2.121-.707-.707Zm2.41 1.319-1.75-1.36-.613.789 1.748 1.36.614-.79Zm2.069-1.124a8.453 8.453 0 0 0-2.643 1.095l.533.846a7.453 7.453 0 0 1 2.33-.966l-.22-.975Zm-.111-1.772-.275 2.198.992.124.275-2.198-.992-.124Z"
    />
    <path
      stroke="#000"
      strokeLinejoin="round"
      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </svg>
)

export default SettingIcon
