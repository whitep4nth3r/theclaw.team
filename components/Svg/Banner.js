import styles from "@styles/StreamerAvatar.module.css";
import TeamData from "@utils/TeamData";

export default function BannerSvg({ name }) {
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 244"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <path
          id="username"
          d="M779.349 28.5866L777.519 26.1652C767.4 12.8049 753.107 5.45527 733.84 3.71757C672.724 -1.83736 626.758 23.8863 586.223 46.5903C578.934 50.6639 571.93 54.5096 565.041 58.2414C515.359 84.5917 468.621 106.299 399.93 105.871H397.071C329.552 105.871 283.329 84.3068 234.133 58.2414C227.129 54.5096 220.24 50.6354 212.922 46.5617C172.387 23.7723 126.421 -1.86586 65.3337 3.8315C46.0669 5.5692 31.774 12.9188 21.6547 26.2791L19.8252 28.7005L20.2826 31.5492C23.1411 50.493 22.5694 71.4307 21.912 91.7418C21.5403 103.421 21.1973 114.531 21.4832 124.986L21.6547 130.911L27.5433 131.823C32.7174 132.62 37.5769 130 42.265 127.493C44.8351 125.94 47.6046 124.743 50.4977 123.932C56.2533 123.277 62.065 123.277 67.8207 123.932C92.433 126.353 120.133 139.771 146.374 153.302L152.406 156.407C220.754 191.645 297.993 228.621 386.809 240.187L408.248 240.728C498.722 229.874 577.362 192.3 646.768 156.378L652.771 153.302C679.013 139.771 706.684 126.353 731.325 123.932C737.081 123.292 742.891 123.292 748.647 123.932C751.541 124.743 754.31 125.94 756.88 127.493C761.568 130 766.428 132.62 771.602 131.823L777.49 130.911L777.662 124.986C777.948 114.417 777.662 103.421 777.233 91.7418C776.576 71.4877 775.89 50.493 778.863 31.5492L779.349 28.5866Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.4902 136.296C39.7204 155.866 66.0765 155.923 84.1427 163.814C101.094 171.22 118.446 181.875 127.907 193.924C135.483 203.496 149.776 232.866 125.335 235.857C166.212 243.178 146.431 186.318 149.804 158.572C124.22 146.152 67.077 110.743 36.4902 136.296Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.777 157.148C32.7459 178.684 18.8532 191.19 12.0498 210.874C45.2379 178.513 91.3753 228.593 129.251 225.288C122.762 178.2 73.3091 174.838 37.777 157.148Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M762.74 136.296C759.51 155.866 733.125 155.923 715.088 163.814C698.108 171.22 680.785 181.875 671.323 193.924C663.748 203.496 649.426 232.866 673.896 235.857C633.018 243.178 652.799 186.318 649.426 158.572C675.096 146.152 732.239 110.743 762.74 136.296Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M761.54 157.148C766.571 178.684 780.464 191.19 787.267 210.874C754.079 178.513 707.97 228.593 670.065 225.288C676.554 178.2 726.008 174.838 761.54 157.148Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M799.902 217.397
            C796.529 191.759 773.832 179.14 771.86 155.951C771.088 146.978 778.406 137.464 779.578 127.123C781.007 114.674 778.634 96.5564 778.291 77.3563C778.006 61.2612 784.009 42.3175 780.864 28.9287C778.634 19.1577 762.312 9.13035 752.536 5.34161C722.092 -6.48043 681.557 3.66087 653.4 13.204C565.871 42.8872 512.472 103.878 399.759 103.593C287.045 103.878 233.647 42.8872 146.117 13.204C117.961 3.66087 77.5117 -6.48043 46.9821 5.34161C37.2058 9.13035 20.8833 19.1577 18.6536 28.9287C15.5663 42.3745 21.5122 61.3182 21.2263 77.3563C20.8833 96.5564 18.5107 114.674 19.9114 127.123C21.112 137.464 28.4871 147.064 27.6581 155.951C25.8 177.772 5.58992 190.364 0.387312 212.925C-0.0811658 214.993 -0.125139 217.134 0.258033 219.22C0.641204 221.305 1.44361 223.292 2.617 225.06C3.19615 225.895 3.98349 226.565 4.90144 227.004C5.81939 227.443 6.83627 227.636 7.85189 227.564C8.8675 227.492 9.8468 227.158 10.6933 226.594C11.5398 226.03 12.2242 225.256 12.6792 224.348C15.6164 218.467 20.4335 213.727 26.3718 210.874C67.5352 195.064 107.098 254.459 142.258 242.21C169.701 232.723 155.494 190.762 157.695 163.614C226.3 196.716 301.024 235.059 398.415 243.378H402.56H402.96C499.495 234.831 573.617 196.659 641.937 163.757C644.138 190.905 629.903 232.866 657.374 242.352C692.534 254.487 732.068 195.092 773.26 211.016C778.446 213.493 782.767 217.462 785.667 222.411C786.349 223.524 787.303 224.446 788.439 225.094C789.574 225.742 790.856 226.093 792.164 226.116C793.472 226.138 794.766 225.832 795.923 225.224C797.081 224.616 798.066 223.727 798.787 222.639C799.805 221.093 800.203 219.222 799.902 217.397ZM12.0789 210.959C18.8823 191.275 32.775 178.769 37.8061 157.233C73.3382 174.838 122.792 178.2 129.28 225.374C91.3758 228.678 45.2384 178.598 12.0503 210.959H12.0789ZM125.278 235.857C149.719 233.008 135.426 203.496 127.851 193.924C118.304 181.874 101.038 171.135 84.0864 163.814C66.0202 155.923 39.6641 155.866 36.4339 136.296C67.0207 110.657 124.164 146.152 149.748 158.572C146.432 186.318 166.213 243.178 125.278 235.857ZM402.246 236.883C401.837 236.912 401.426 236.912 401.017 236.883H397.786H396.672C302.882 226.827 222.298 184.182 149.748 146.807C124.821 133.96 95.2348 119.317 68.6215 116.668C62.2104 115.941 55.7372 115.941 49.3261 116.668C41.8367 118.007 33.947 125.214 28.7158 124.53C27.8868 95.5594 32.2033 60.6915 27.4294 30.2106C36.5483 18.1892 49.126 12.093 66.0488 10.5832C135.226 4.28758 183.25 39.07 230.874 64.2808C280.671 90.6881 327.866 112.879 397.786 112.708H401.817C471.509 112.708 518.647 90.6596 568.329 64.2808C616.067 38.9275 663.977 4.28758 733.154 10.5832C750.077 12.093 762.655 18.1892 771.774 30.2106C767 60.6915 771.316 95.5594 770.487 124.53C765.256 125.328 757.367 118.007 749.877 116.668C743.466 115.941 736.993 115.941 730.582 116.668C703.94 119.317 674.382 133.96 649.455 146.807C576.933 184.21 496.236 226.884 402.303 236.911L402.246 236.883ZM649.455 158.572C675.04 146.152 732.154 110.743 762.769 136.296C759.539 155.866 733.154 155.923 715.117 163.814C698.137 171.22 680.814 181.874 671.352 193.924C663.777 203.496 649.455 232.866 673.925 235.857C633.104 243.178 652.886 186.318 649.513 158.572H649.455ZM670.123 225.516C676.555 178.342 726.008 174.981 761.597 157.376C766.628 178.912 780.521 191.418 787.325 211.102C754.165 178.598 707.97 228.678 670.123 225.516Z"
          fill="black"
        />
        <text textLength="100%" dx="165%" dy="-19%">
          <textPath className={styles.banner__namePath} textAnchor="middle" href="#username">
            {name}
          </textPath>
        </text>
      </svg>
    </>
  );
}