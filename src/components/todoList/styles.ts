import { css } from '@emotion/react';
import { COLORS } from '@styles/colors';

export const todoListCss = css`
  margin: 20px 0;
`;

export const todoCss = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  color: ${COLORS.main};

  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const todoContentCss = (isDone: boolean) => css`
  input {
    width: 20px;
    aspect-ratio: 1/1;
  }

  span {
    text-decoration: ${isDone ? 'line-through' : 'none'};
  }
`;

export const todoButtonContainerCss = css`
  & > button:hover {
    cursor: pointer;
  }
`;

export const todoInputContainerCss = css``;

export const TodoInputCss = css`
  display: flex;
  gap: 10px;
  height: 40px;

  input {
    width: 100%;
    flex-shrink: 1;
    padding: 0 10px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 0 1px ${COLORS.gray600};

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${COLORS.gray600};
    }
  }

  button {
    width: 60px;
    background: ${COLORS.lime800};
    border: 1px solid ${COLORS.lime900};
    border-radius: 4px;
    color: ${COLORS.white};
  }
`;
