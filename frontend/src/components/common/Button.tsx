import { CommandBarButton, DefaultButton, IButtonProps, IButtonStyles, ICommandBarStyles } from "@fluentui/react";

interface HistoryButtonProps extends IButtonProps {
    onClick: () => void;
    text: string;
  }

export const HistoryButton: React.FC<HistoryButtonProps> = ({onClick, text}) => {
    const historyButtonStyles: ICommandBarStyles & IButtonStyles = {
        root: {
            width: '200px',
            border: `2px solid #2e2e2e`,
            borderRadius: '4px',
            marginRight: '20px',
            backgroundColor: '#2d2d2d',
            color: '#dee2e6',
          },
          rootHovered: {
            backgroundColor: '#2d2d2d',
            color: '#dee2e6',
          },
          rootPressed: {
            backgroundColor: '#2d2d2d',
            color: '#dee2e6',
          },
      };

      return (
        <DefaultButton
            text={text}
            iconProps={{ iconName: 'History' }}
            onClick={onClick}
            styles={historyButtonStyles}
        />
      )
}