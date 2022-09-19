import React from 'react';

export const colors: any = {
  primary: {
    main: '#20c997',
    bg: '#e7f5ef'
  },
  secondary: {
    main: '#6c757d',
    bg: '#f0f0f1'
  },
  success: {
    main: '#52c41a',
    bg: '#e8f1e9'
  },
  info: {
    main: '#17a2b8',
    bg: '#dfe9eb'
  },
  warning: {
    main: '#ffb533',
    bg: '#efede3'
  },
  danger: {
    main: '#dc3545',
    bg: '#ecdedf'
  },
};

export const renderIcon = (color: string) => {
  const icons = {
    success: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="28px"
        viewBox="0 0 24 24"
        width="28px"
        fill={colors[color].main}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
      </svg>
    ),
    info: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill={colors[color].main}
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
          <path d="M11,7h2v2h-2V7z M11,11h2v6h-2V11z M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20 c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z" />
        </g>
      </svg>
    ),
    warning: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill={colors[color].main}
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <g>
              <path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
              <polygon points="13,16 11,16 11,18 13,18" />
              <polygon points="13,10 11,10 11,15 13,15" />
            </g>
          </g>
        </g>
      </svg>
    ),
    danger: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill={colors[color].main}
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      </svg>
    ),
  };

  switch (color) {
    case 'success':
      return icons[color];
    case 'info':
      return icons[color];
    case 'warning':
        return icons[color];
    case 'danger':
        return icons[color];
    default:
      return;
  }
};
