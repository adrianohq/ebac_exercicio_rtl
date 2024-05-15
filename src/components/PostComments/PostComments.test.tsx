import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar 2 comentários', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Adicionando primeiro comentário de teste'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Adicionando segundo comentário de teste'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        expect(screen.getAllByTestId('comentario')).toHaveLength(2);
    })
});