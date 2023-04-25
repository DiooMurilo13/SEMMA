interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...rest }: IProps) {
  return (
    <>
      <button
        className={`bg-button text-gray-200 text-2xl flex-1 rounded-md sm2:px-12 sm2:py-7  ${className}`}
        type="button"
        {...rest}
      >
        {children}
      </button>
    </>
  );
}
