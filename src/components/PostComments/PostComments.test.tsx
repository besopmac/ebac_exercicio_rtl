import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
  test('Deve renderizar o componente corretamente', () => {
    render(<PostComment/>);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
  });
    
  test('Deve renderizar o componente com dois comentarios', () => {
    render(<PostComment />);
    
    const commentInput = screen.getByTestId('comment-input');
    const submitButton = screen.getByText('Comentar');
    
    fireEvent.change(commentInput, { target: { value: 'Primeiro comentário' } });
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();
    
    fireEvent.change(commentInput, { target: { value: 'Segundo comentário' } });
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});