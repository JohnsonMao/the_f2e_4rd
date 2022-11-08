import { css } from '@linaria/core';

const shake = css`
    animation: shake 0.5s infinite;

    @keyframes shake {
        0% {
            transform: translateY(-10%);
        }
        100% {
            transform: translateY(5%);
        }
    }
`;

export default shake;