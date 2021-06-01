import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  Modal,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import { isNil } from 'ramda';
import React, { useEffect, useState } from 'react';
import Form from './Form';
import useStyles from './useStyles';

const EditPopup = ({ cardId, onClose, onCardDestroy, onCardLoad, onCardUpdate }) => {
  const [task, setTask] = useState(null);
  const [isUpdating, setUpdating] = useState(false);
  const [isDestroying, setDestroying] = useState(false);
  const [errors, setErrors] = useState({});
  const styles = useStyles();

  useEffect(() => {
    onCardLoad(cardId).then(setTask);
  }, []);

  const handleCardUpdate = () => {
    setUpdating(true);

    onCardUpdate(task).catch((error) => {
      setUpdating(false);
      setErrors(error || {});

      if (error instanceof Error) {
        alert(`Update Failed! Error: ${error.message}`);
      }
    });
  };

  const handleCardDestroy = () => {
    setDestroying(true);

    onCardDestroy(task).catch((error) => {
      setDestroying(false);

      alert(`Destrucion Failed! Error: ${error.message}`);
    });
  };
  const isLoading = isNil(task);

  const isActionInProcess = isLoading || isUpdating || isDestroying;

  return (
    <Modal className={styles.modal} open onClose={onClose}>
      <Card className={styles.root}>
        <CardHeader
          action={
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          }
          title={isLoading ? 'Your task is loading. Please be patient.' : `Task # ${task.id} [${task.name}]`}
        />
        <CardContent>
          {isLoading ? (
            <div className={styles.loader}>
              <CircularProgress />
            </div>
          ) : (
            <Form errors={errors} onChange={setTask} task={task} />
          )}
        </CardContent>
        <CardActions className={styles.actions}>
          <Button
            disabled={isActionInProcess}
            onClick={handleCardUpdate}
            size="small"
            variant="contained"
            color="primary"
          >
            Update
          </Button>
          <Button
            disabled={isActionInProcess}
            onClick={handleCardDestroy}
            size="small"
            variant="contained"
            color="secondary"
          >
            Destroy
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};

EditPopup.propTypes = {
  onCardLoad: PropTypes.func.isRequired,
  onCardDestroy: PropTypes.func.isRequired,
  onCardUpdate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  cardId: PropTypes.number.isRequired,
};

export default EditPopup;
