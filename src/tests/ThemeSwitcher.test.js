
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeSwitcher from '../componenets/ThemeSwitcher';

describe('ThemeSwitcher', () => {
  test('toggles between light and dark themes', () => {
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );

    // Initial theme is light, check the button color
    const button = screen.getByText('Toggle Theme');
    expect(button).toHaveStyle('background-color: #007bff'); // Light theme color

    // Click to toggle theme
    fireEvent.click(button);
    expect(button).toHaveStyle('background-color: #ff6347'); // Dark theme color
  });

  test('changes button color using the color picker', () => {
    render(
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>
    );

    const colorInput = screen.getByLabelText('Change Button Color:');
    fireEvent.change(colorInput, { target: { value: '#ff5733' } });

    const button = screen.getByText('Toggle Theme');
    expect(button).toHaveStyle('background-color: #ff5733');
  });
});
