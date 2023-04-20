import "./Navbar.css"
import { Link } from "react-router-dom"
export const Navbar = () => {
    
    return (
        <>
            <nav>
                <a href="index.html">
                    <svg width="106" height="106" viewBox="0 0 106 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.0497 53.0924V58.4811L52.6026 59L49.1555 58.4811V53.0924H43.6566L43 49.7395L43.6566 46.3866H49.1555V40.5189L52.6026 40L56.0497 40.5189V46.3866H61.4665L62 49.8193L61.4665 53.0924H56.0497Z" fill="url(#paint0_linear_206_17)" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M40.1241 8.40842C34.2235 12.9948 27.587 18.1488 25.3765 19.862C23.166 21.5751 20.8487 23.3873 20.2269 23.8894C19.605 24.391 15.4274 27.5986 10.9429 31.0176C0.444155 39.0213 0 39.4685 0 42.039C0 43.6725 0.221432 44.2495 1.21231 45.1982C2.90052 46.8136 4.71877 47.2411 9.46758 47.1378C11.724 47.0889 13.8001 47.1905 14.0808 47.3637C14.4627 47.5995 14.5906 52.7076 14.5906 67.7444C14.5906 79.5997 14.77 88.7541 15.0287 90.1174C16.181 96.1884 20.6453 101.821 26.4154 104.485C29.4584 105.889 29.7198 105.933 34.9921 105.933C40.2091 105.933 40.5464 105.878 43.2813 104.578C47.1062 102.759 51.3203 98.5524 53.1364 94.7402C54.6903 91.4781 55.4546 87.0619 55.2773 82.3696L55.1567 79.1701L57.0814 77.8681C69.1908 69.6762 76.2406 62.5724 80.0723 54.7016C82.6266 49.455 83.4153 46.144 83.1355 41.8401C82.8184 36.9575 81.5421 33.8887 78.5794 30.8843C75.8801 28.1469 72.8985 26.781 68.6535 26.3378C66.5782 26.1212 66.0152 25.8769 65.2698 24.8698C63.5935 22.6049 59.8897 22.4394 57.6625 24.5299C55.3151 26.733 55.4644 30.2674 57.9946 32.3942C60.1725 34.2248 64.1639 33.6435 65.8409 31.2513C66.4773 30.3432 66.6262 30.3239 69.3521 30.7904C73.4538 31.4922 75.8398 33.1007 77.4525 36.2505C78.6253 38.5416 78.7463 39.1619 78.7463 42.8815C78.7463 45.7706 78.5081 47.6822 77.9413 49.3426C75.9625 55.138 70.5606 62.1184 63.5051 67.9974C59.0001 71.7512 53.2411 75.5603 52.627 75.1921C42.3402 69.0254 33.4515 60.3868 29.6575 52.8688C26.0399 45.7007 26.2382 38.0498 30.151 33.8433C31.6423 32.2399 33.3309 31.463 36.6537 30.8513C39.5169 30.3244 39.5427 30.3282 40.4739 31.4313C41.7386 32.9293 42.9552 33.4802 44.9983 33.4802C48.3009 33.4802 50.8212 29.9883 49.7844 26.8492C49.0188 24.532 47.1225 23.191 44.6116 23.191C42.8045 23.191 42.314 23.3899 41.0798 24.6229C39.9139 25.7877 39.2101 26.1007 37.3103 26.2996C32.3607 26.8179 26.8626 30.0834 25.0529 33.58C23.0737 37.4038 22.5017 45.2124 23.8651 49.8005C26.5055 58.6861 34.7831 68.2229 47.2049 76.6904L50.8525 79.1766L50.9851 81.9444C51.1838 86.0887 50.3882 91.0314 49.1197 93.5325C47.6366 96.4564 44.9163 99.0926 41.8141 100.612C39.5165 101.738 38.844 101.86 34.9745 101.86C31.1518 101.86 30.3909 101.726 28.0079 100.626C24.7727 99.1333 21.8571 96.1696 20.2466 92.7364L19.0965 90.285L18.882 68.4205C18.6532 45.1151 18.6966 45.5549 16.4663 43.8028C15.466 43.0165 14.7455 42.9119 10.3233 42.9119C6.79879 42.9119 5.07925 42.7404 4.52266 42.334C3.79313 41.8011 3.97851 41.5726 6.90822 39.399C8.65523 38.1021 11.6605 35.8064 13.5864 34.2964C17.4607 31.2594 22.5923 27.2754 36.6911 16.3581C41.8836 12.3376 47.1941 8.21379 48.4923 7.19387C53.0124 3.64239 52.754 3.71699 55.0263 5.30023C56.8209 6.55037 82.4433 26.3626 87.8118 30.6515C89.0215 31.6178 92.74 34.5095 96.0752 37.0771C103.442 42.749 103.447 42.9119 96.2671 42.9119C90.9539 42.9119 89.4992 43.3295 88.2667 45.209C87.659 46.135 87.5599 48.7853 87.4522 66.9882C87.3342 86.8236 87.2921 87.7749 86.4707 89.1648C85.0894 91.5013 83.2591 92.2142 78.6399 92.2142C74.7391 92.2142 74.6335 92.1872 73.4834 90.9015C72.6453 89.9648 71.7896 89.5193 70.4936 89.3457C66.8618 88.8591 64.3703 90.9864 64.3703 94.5739C64.3703 96.2849 64.5857 96.8024 65.804 98.0195C68.2913 100.504 70.7477 100.505 73.2324 98.0229C74.6579 96.5987 74.6777 96.5936 79.4939 96.4324C85.3722 96.2356 87.1179 95.4459 89.5854 91.8674L91.1912 89.5386L91.3144 68.6962C91.3822 57.2327 91.6088 47.6822 91.8186 47.4726C92.0281 47.2634 94.0969 47.121 96.416 47.1562C101.302 47.2299 103.101 46.8089 104.784 45.1982C105.811 44.2156 105.996 43.6956 105.996 41.8045C105.996 39.24 106.421 39.6957 98.0445 33.2658C95.2796 31.1437 90.5793 27.524 87.5985 25.2227C84.6182 22.9209 80.7311 19.9405 78.9609 18.5994C77.1907 17.258 75.6458 16.0434 75.5278 15.8998C75.4098 15.7566 73.7683 14.4585 71.8801 13.015C69.992 11.5715 65.4538 8.06459 61.7955 5.22135C52.3794 -2.0964 53.9333 -2.32491 40.1241 8.40842ZM65.9572 82.9467C61.8195 84.4875 58.822 87.8658 57.8865 92.0406C56.7673 97.0381 59.4554 102.757 64.0313 105.113C66.4005 106.333 73.0058 106.284 75.0987 105.03C78.4811 103.005 79.7694 100.91 78.4459 99.5882C77.5941 98.7372 76.4796 98.9952 74.182 100.574C72.3432 101.838 71.63 102.075 69.665 102.075C67.0614 102.075 65.5684 101.45 63.8613 99.6477C61.6607 97.3245 61.2028 94.2018 62.6091 91.1086C64.5415 86.8587 70.1276 85.4049 73.9087 88.1684C76.5796 90.1204 77.1474 90.291 78.1009 89.4293C78.5738 89.0014 78.9609 88.2135 78.9609 87.6776C78.9609 86.5976 76.7066 84.5218 74.2902 83.3763C72.2522 82.4099 67.9875 82.1904 65.9572 82.9467Z" fill="url(#paint1_linear_206_17)" />
                        <defs>
                            <linearGradient id="paint0_linear_206_17" x1="62" y1="49.5" x2="43" y2="49.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0.228723" stop-color="#007EA7" />
                                <stop offset="0.760638" stop-color="#9AD1D4" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_206_17" x1="4.63507e-09" y1="41.6258" x2="105.996" y2="40.9814" gradientUnits="userSpaceOnUse">
                                <stop offset="0.251187" stop-color="#9AD1D4" />
                                <stop offset="0.75523" stop-color="#007EA7" />
                            </linearGradient>
                        </defs>
                    </svg>

                </a>
                <div>
                    <ul id="navbar">
                        <li>
                        <Link to='/home'>Home</Link>
                            {/* <Link className="active" to='/home'>Home</Link> */}
                            {/* <a className="active" href="index.html">Home</a> */}
                        </li>
                        <li>
                            <Link to='/servicos'>Serviços</Link>
                            {/* <a href="index.html">Serviços</a> */}
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                            {/* <a href="login.html">Login</a> */}
                        </li>
                    </ul>
                </div>

            </nav>
        
        </>
    );
}

