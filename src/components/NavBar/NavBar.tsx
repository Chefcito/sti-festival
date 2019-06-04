import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <nav className="nav-bar">
        <div className="nav-bar__logo">
            <Link className="nav-bar__logo__link" to="/">
                <svg className="nav-bar__logo__link__svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512"><path d="M506.555,208.064L263.859,30.367c-4.68-3.426-11.038-3.426-15.716,0L5.445,208.064c-5.928,4.341-7.216,12.665-2.875,18.593s12.666,7.214,18.593,2.875L256,57.588l234.837,171.943c2.368,1.735,5.12,2.57,7.848,2.57c4.096,0,8.138-1.885,10.744-5.445C513.771,220.729,512.483,212.405,506.555,208.064z"/><path d="M442.246,232.543c-7.346,0-13.303,5.956-13.303,13.303v211.749H322.521V342.009c0-36.68-29.842-66.52-66.52-66.52s-66.52,29.842-66.52,66.52v115.587H83.058V245.847c0-7.347-5.957-13.303-13.303-13.303s-13.303,5.956-13.303,13.303v225.053c0,7.347,5.957,13.303,13.303,13.303h133.029c6.996,0,12.721-5.405,13.251-12.267c0.032-0.311,0.052-0.651,0.052-1.036v-128.89c0-22.009,17.905-39.914,39.914-39.914s39.914,17.906,39.914,39.914v128.89c0,0.383,0.02,0.717,0.052,1.024c0.524,6.867,6.251,12.279,13.251,12.279h133.029c7.347,0,13.303-5.956,13.303-13.303V245.847C455.549,238.499,449.593,232.543,442.246,232.543z"/></svg>
            </Link>
        </div> 

        <div className="nav-bar__items">
            <div className="nav-bar__items__item">
                <Link className="nav-bar__items__item__link" to="/KNNFriends">
                    <svg className="nav-bar__items__item__link__svg" height="480pt" viewBox="0 -42 480.00007 480" width="480pt" xmlns="http://www.w3.org/2000/svg"><path d="m240 144c39.765625 0 72-32.234375 72-72s-32.234375-72-72-72-72 32.234375-72 72c.042969 39.746094 32.253906 71.957031 72 72zm0-128c30.929688 0 56 25.070312 56 56s-25.070312 56-56 56-56-25.070312-56-56c.035156-30.914062 25.085938-55.964844 56-56zm0 0"/><path d="m72 120c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40-40 17.910156-40 40c.027344 22.082031 17.917969 39.972656 40 40zm0-64c13.253906 0 24 10.746094 24 24s-10.746094 24-24 24-24-10.746094-24-24 10.746094-24 24-24zm0 0"/><path d="m408 120c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40-40 17.910156-40 40c.027344 22.082031 17.917969 39.972656 40 40zm0-64c13.253906 0 24 10.746094 24 24s-10.746094 24-24 24-24-10.746094-24-24 10.746094-24 24-24zm0 0"/><path d="m440 120c-1.730469 0-3.414062.5625-4.800781 1.601562l-27.199219 20.398438-27.199219-20.398438c-1.386719-1.039062-3.070312-1.601562-4.800781-1.601562-13.167969-.015625-25.480469 6.515625-32.855469 17.425781-12.136719-6.148437-25.539062-9.375-39.144531-9.425781-2.121094 0-4.15625.84375-5.65625 2.34375l-58.34375 58.34375-58.34375-58.34375c-1.5-1.5-3.535156-2.34375-5.65625-2.34375-13.605469.050781-27.007812 3.277344-39.144531 9.425781-7.375-10.910156-19.6875-17.441406-32.855469-17.425781-1.730469 0-3.414062.5625-4.800781 1.601562l-27.199219 20.398438-27.199219-20.398438c-1.386719-1.039062-3.070312-1.601562-4.800781-1.601562-22.082031.027344-39.9726562 17.917969-40 40v71.121094c.00390625 8.28125 4.265625 15.980468 11.28125 20.382812l48.949219 30.609375c3.820312 2.316407 8.199219 3.539063 12.664062 3.535157 3.707031.007812 7.363281-.84375 10.679688-2.488282l4.425781-2.214844v36.65625c-.003906 9.496094 5.589844 18.101563 14.273438 21.949219l121.503906 53.992188c10.320312 4.601562 22.109375 4.601562 32.429687 0l121.511719-54c8.683594-3.84375 14.28125-12.449219 14.28125-21.941407v-44.679687l5.296875 2.628906c6.738281 3.359375 14.660156 3.359375 21.398437 0l48-24c8.167969-4.035156 13.328126-12.363281 13.304688-21.472656v-70.078125c-.027344-22.082031-17.917969-39.972656-40-40zm-363.574219 148.800781c-2.484375 1.214844-5.417969 1.085938-7.785156-.34375l-48.800781-30.519531c-2.34375-1.484375-3.789063-4.042969-3.839844-6.816406v-71.121094c0-12.289062 9.28125-22.59375 21.503906-23.871094l29.695313 22.269532c2.84375 2.136718 6.757812 2.136718 9.601562 0l29.695313-22.269532c6.660156.679688 12.722656 4.132813 16.703125 9.511719-.535157.398437-1 .871094-1.527344 1.28125-1.238281.972656-2.398437 2-3.601563 3.03125-1.535156 1.335937-3.03125 2.695313-4.460937 4.125-1.105469 1.105469-2.152344 2.234375-3.203125 3.394531-1.34375 1.492188-2.632812 3.03125-3.871094 4.617188-.941406 1.214844-1.863281 2.398437-2.742187 3.695312-1.160157 1.65625-2.226563 3.359375-3.265625 5.085938-.800782 1.296875-1.550782 2.59375-2.261719 3.929687-.960937 1.816407-1.816406 3.679688-2.648437 5.597657-.59375 1.34375-1.21875 2.671874-1.746094 4.058593-.800782 2.007813-1.390625 4.0625-2.015625 6.136719-.398438 1.335938-.855469 2.636719-1.191407 4-.574218 2.316406-.976562 4.695312-1.359374 7.070312-.191407 1.167969-.472657 2.3125-.617188 3.488282-.449219 3.597656-.679688 7.222656-.6875 10.847656v47.054688zm299.574219 48.800781c0 3.179688-1.886719 6.054688-4.800781 7.328126l-121.503907 54.007812c-6.175781 2.757812-13.230468 2.757812-19.40625 0l-121.488281-54.007812c-2.914062-1.273438-4.800781-4.148438-4.800781-7.328126v-101.601562c-.003906-6.152344.773438-12.28125 2.3125-18.238281 8.070312-30.492188 34.984375-52.222657 66.488281-53.691407l61.597657 61.601563c3.125 3.125 8.191406 3.125 11.3125 0l61.601562-61.601563c38.410156 1.832032 68.628906 33.476563 68.6875 71.929688zm88-87.523437c.007812 3.058594-1.722656 5.851563-4.464844 7.203125l-48 24c-2.226562 1.109375-4.851562 1.109375-7.078125 0l-12.457031-6.242188v-39.039062c-.007812-3.640625-.238281-7.277344-.6875-10.886719-.144531-1.183593-.425781-2.328125-.617188-3.496093-.390624-2.402344-.800781-4.746094-1.359374-7.058594-.335938-1.367188-.800782-2.679688-1.199219-4-.617188-2.054688-1.242188-4.101563-2-6.101563-.535157-1.394531-1.167969-2.738281-1.769531-4.097656-.800782-1.863281-1.664063-3.710937-2.625-5.519531-.710938-1.351563-1.503907-2.664063-2.285157-4-1.023437-1.710938-2.089843-3.390625-3.199219-5.023438-.898437-1.28125-1.832031-2.527344-2.792968-3.761718-1.21875-1.597657-2.480469-3.0625-3.808594-4.542969-1.054688-1.175781-2.136719-2.335938-3.257812-3.457031-1.40625-1.414063-2.886719-2.75-4.398438-4.070313-1.191406-1.039063-2.398438-2.082031-3.648438-3.0625-.519531-.410156-.984374-.882813-1.519531-1.28125 3.980469-5.378906 10.039063-8.832031 16.695313-9.511719l29.671875 22.269532c2.84375 2.136718 6.757812 2.136718 9.601562 0l29.695313-22.269532c12.222656 1.277344 21.503906 11.582032 21.503906 23.871094zm0 0"/></svg>
                </Link>
            </div>

            <div className="nav-bar__items__item">
                <Link className="nav-bar__items__item__link" to="/CreateFestival">
                    <svg className="nav-bar__items__item__link__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><path d="M471.365,267.639c-4.142,0-7.5-3.357-7.5-7.5v-8.283c0-4.142,3.358-7.5,7.5-7.5c4.142,0,7.5,3.358,7.5,7.5v8.283C478.865,264.281,475.507,267.639,471.365,267.639z"/><path d="M40.636,267.639c-4.142,0-7.5-3.357-7.5-7.5v-8.283c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v8.283C48.136,264.281,44.779,267.639,40.636,267.639z"/><path d="M504.499,215.365h-66.267c-4.142,0-7.5,3.357-7.5,7.5V248.5h-67.834v-88.788l22.462-22.461c6.885,4.711,14.905,7.077,22.93,7.077c10.405,0,20.811-3.961,28.732-11.882c0,0,0,0,0-0.001c15.842-15.843,15.842-41.62,0-57.464c-15.843-15.842-41.622-15.843-57.464,0.001c-14.03,14.031-15.625,35.848-4.804,51.661l-22.458,22.457h-88.795V81.267h25.634 c4.142,0,7.5-3.357,7.5-7.5V7.5c0-4.143-3.358-7.5-7.5-7.5h-66.267c-4.142,0-7.5,3.357-7.5,7.5v66.267c0,4.143,3.358,7.5,7.5,7.5h25.632v67.834h-25.632c-4.142,0-7.5,3.357-7.5,7.5c0,4.143,3.358,7.5,7.5,7.5h125.03v183.797H164.101v-91.878c0-0.007,0.001-0.013,0.001-0.019c0-0.007-0.001-0.013-0.001-0.019v-91.88h28.767c4.142,0,7.5-3.357,7.5-7.5c0-4.143-3.358-7.5-7.5-7.5h-33.162l-22.451-22.452c4.605-6.704,7.09-14.627,7.09-22.936c0-10.854-4.227-21.058-11.901-28.732c-15.842-15.842-41.621-15.842-57.464,0c-7.675,7.675-11.901,17.878-11.901,28.732c0,10.854,4.227,21.058,11.901,28.732c7.921,7.921,18.327,11.882,28.732,11.882c8.025,0,16.045-2.366,22.93-7.078l22.46,22.46V248.5H81.268v-25.635c0-4.143-3.358-7.5-7.5-7.5H7.501c-4.142,0-7.5,3.357-7.5,7.5v66.267c0,4.143,3.358,7.5,7.5,7.5h66.267c4.142,0,7.5-3.357,7.5-7.5V263.5h67.833v88.793l-22.462,22.461c-15.813-10.82-37.632-9.225-51.662,4.804c0,0,0,0,0,0.001c-15.842,15.843-15.842,41.62,0,57.464c7.921,7.921,18.327,11.882,28.732,11.882c10.405,0,20.811-3.961,28.732-11.882c14.031-14.031,15.625-35.849,4.805-51.662l22.464-22.464h88.79v67.836h-25.633c-4.142,0-7.5,3.357-7.5,7.5V504.5c0,4.143,3.358,7.5,7.5,7.5h66.267c4.142,0,7.5-3.357,7.5-7.5v-66.267c0-4.143-3.358-7.5-7.5-7.5H263.5v-67.836h88.786l22.465,22.465c-10.82,15.814-9.226,37.631,4.805,51.661c7.674,7.675,17.878,11.902,28.732,11.902c10.854,0,21.057-4.228,28.732-11.901c15.843-15.844,15.843-41.621,0-57.465c-7.675-7.674-17.878-11.901-28.732-11.901c-8.309,0-16.233,2.486-22.937,7.09l-22.454-22.454V263.5h67.834v25.632c0,4.143,3.358,7.5,7.5,7.5h66.267c4.142,0,7.5-3.357,7.5-7.5v-66.267C511.999,218.723,508.641,215.365,504.499,215.365z M230.367,15h51.267v51.267h-25.615c-0.007,0-0.013-0.001-0.019-0.001c-0.007,0-0.013,0.001-0.019,0.001h-25.613V15z M15.001,281.632v-51.267h51.267v25.615c0,0.007-0.001,0.013-0.001,0.019c0,0.007,0.001,0.013,0.001,0.019v25.613H15.001z M85.585,121.838c-4.841-4.841-7.508-11.278-7.508-18.125c0-6.848,2.667-13.284,7.508-18.125c4.997-4.998,11.561-7.496,18.126-7.496c6.564,0,13.128,2.498,18.126,7.496c4.841,4.841,7.507,11.277,7.507,18.125c0,6.847-2.666,13.284-7.507,18.125C111.841,131.834,95.58,131.834,85.585,121.838z M121.835,426.416c-9.994,9.994-26.256,9.995-36.252,0.001c-9.994-9.995-9.994-26.257,0-36.252v0.001c9.996-9.996,26.257-9.996,36.252,0C131.829,400.16,131.829,416.422,121.835,426.416z M281.634,497h-51.267v-51.267h51.267V497z M390.163,85.589c4.998-4.998,11.561-7.496,18.126-7.496c6.563,0,13.129,2.499,18.126,7.495c9.994,9.995,9.994,26.257,0,36.252v-0.001c-9.993,9.993-26.253,9.995-36.248,0.004c-0.001-0.001-0.002-0.002-0.003-0.003c-0.001-0.001-0.002-0.002-0.004-0.003C380.17,111.841,380.171,95.582,390.163,85.589z M426.413,390.167c9.994,9.994,9.994,26.256,0,36.25c-4.842,4.842-11.279,7.509-18.125,7.509c-6.847,0-13.284-2.667-18.125-7.508c0-0.001,0-0.001,0-0.001c-9.994-9.994-9.994-26.256,0-36.251c4.841-4.841,11.278-7.508,18.125-7.508C415.135,382.658,421.572,385.325,426.413,390.167z M496.999,281.632h-51.267v-51.267h51.267V281.632z"/><path d="M184.432,261.302l24.848,24.851c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196c2.929-2.929,2.929-7.678,0.001-10.606l-19.545-19.548l19.545-19.545c2.929-2.93,2.929-7.678,0-10.607c-2.929-2.928-7.678-2.928-10.606,0l-24.848,24.849C181.504,253.625,181.503,258.373,184.432,261.302z"/><path d="M292.114,286.153c1.464,1.464,3.384,2.196,5.303,2.196s3.839-0.732,5.303-2.196l24.848-24.849c2.929-2.93,2.929-7.678,0-10.606l-24.848-24.851c-2.93-2.929-7.678-2.93-10.607-0.001c-2.929,2.929-2.929,7.678-0.001,10.606l19.545,19.548l-19.545,19.545C289.184,278.476,289.184,283.224,292.114,286.153z"/><path d="M239.428,288.351c2.423,0,4.802-1.173,6.248-3.341l33.132-49.701c2.298-3.446,1.366-8.104-2.08-10.4c-3.446-2.297-8.103-1.366-10.401,2.08l-33.132,49.701c-2.297,3.446-1.366,8.104,2.081,10.4C236.554,287.942,237.999,288.351,239.428,288.351z"/><path d="M260.142,48.133c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-8.284c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5H260.142z"/><path d="M251.859,478.861h8.284c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5h-8.284c-4.142,0-7.5,3.357-7.5,7.5S247.717,478.861,251.859,478.861z"/><path d="M471.365,267.639c4.142,0,7.5-3.357,7.5-7.5v-8.283c0-4.142-3.358-7.5-7.5-7.5c-4.142,0-7.5,3.358-7.5,7.5v8.283C463.865,264.281,467.222,267.639,471.365,267.639z"/><path d="M40.636,244.355c-4.142,0-7.5,3.358-7.5,7.5v8.283c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-8.283C48.136,247.713,44.779,244.355,40.636,244.355z"/></svg>
                </Link>
            </div>

            <div className="nav-bar__items__item">
                <Link className="nav-bar__items__item__link" to="/">
                    <svg className="nav-bar__items__item__link__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/><path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/></svg>
                </Link>
            </div>
        </div>
    </nav>;
}

export default NavBar;