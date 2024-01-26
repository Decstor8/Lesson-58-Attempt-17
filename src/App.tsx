import React, { useState } from 'react';
import Appbar from "./components/Appbar/Appbar";
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';

const App: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

    const cancelModal = () => {
        setShowModal(false);
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <>
            <header>
                <Appbar />
            </header>
            <div className="container">
                <h1>Занятие 58, всплывающее окно.</h1>

                <button className="btn btn-primary" onClick={() => setShowModal(true)}>Открыть окно</button>

                <Modal
                show={showModal}
                onClose={cancelModal}
                title='Информация о модальном окне'
                buttons={[
                    { type: 'primary', label: 'Continue', onClick: () => console.log('clicked continue') },
                    { type: 'danger', label: 'Close', onClick: () => console.log('clicked cancel') },
                ]}
                >
                    <p>Мода́льное окно́ в графическом интерфейсе пользователя — окно,
                    которое блокирует работу пользователя с родительским приложением
                    до тех пор, пока пользователь это окно не закроет.</p>
                </Modal>
                {showAlert && (
                <Alert type="warning" onDismiss={closeAlert}>
                    This is a warning type alert with close button.
                </Alert>
                )}
                <Alert type="success">
                    This is a success type alert without close button.
                </Alert>
            </div>
        </>
    );
};

export default App;
