import React from 'react';
import Message from './Message';
import { Icon } from '../../index';

export default {
    title: 'Message',
    component: Message,
};

export const DefaultMessage = () => (
  <Message 
    className='basic-message'
    msgHeader='Basic Message'
    msgContent='This is a basic message for you to use, you can change it to any message you want.'
  >
  </Message>
);

export const DiffTypeMessage = () => (
  <div>
    <h3>Basic Message</h3>
      <Message
        className='basic-message'
        msgHeader='Basic Message'
        msgContent='This is a basic message for you to use, you can change it to any message you want.'
      >
      </Message>
    <br />
    <br />
    <h3>List Message</h3>
      <Message 
        className='list-message'
        msgList={true}
        msgHeader='List Message'
        msgContent='This is the first bullet point for you to use, you can change it to any message you want.'
        msgBulletContent='This is the second bullet point for you to use, you can change it to any message you want.'
      >
      </Message>
    <br />
    <br />
    <h3>Icon Message</h3>
      <Message
        className='icon-message'
        msgIcon={
          <Icon disabled={false} loading={true} name='spinner' size='large' color='black' />
          }
        msgHeader='Icon Message'
        msgContent='This is an icon message for you to use, you can change it to any message you want.'
        >
      </Message>
    <br />
    <br />
    <h3>Dismiss Message</h3>
    <Message
      className='dismiss-message'
      msgIcon={
        <Icon disabled={false} loading={false} name='times' size='mini' color='black' />
        }
      msgHeader='Dismiss Message'
      msgContent='This is a dismiss message for you to use, you can change it to any message you want. You can click the delete button to dismiss this message.'
      msgOnClick={() => {
        const element = document.querySelector('.dismiss-message');
        return element?.remove();
      }}
    >
    </Message>
  </div>
);


export const DiffSizeMessage = () => (
  <div className='size-message'>
    <br />
    <br />
    <Message
      className='mini-message'
      msgSize='mini'
      msgContent='This is a mini message.'
    >
    </Message>
    <br />
    <br />
    <Message
      className='tiny-message'
      msgSize='tiny'
      msgContent='This is a tiny message.'
    >
    </Message>
    <br />
    <br />
    <Message
      className='small-message'
      msgSize='small'
      msgContent='This is a small message.'
    >
    </Message>
    <br />
    <br />
    <Message
      className='large-message'
      msgSize='large'
      msgContent='This is a large message.'
    >
    </Message>
    <br />
    <br />
    <Message
      className='big-message'
      msgSize='big'
      msgContent='This is a big message.'
    >
    </Message>
    <br />
    <br />
    <Message
      className='huge-message'
      msgSize='huge'
      msgContent='This is a huge message.'
    >
    </Message>
    <br />
    <br />
    <Message
      className='massive-message'
      msgSize='massive'
      msgContent='This is a massive message.'
    >
    </Message>
  </div>
);

export const DiffColorMessage = () => (
  <div className='color-message'>
    <br />
    <br />
    <Message
      className='white-message'
      msgColor='white'
      msgContent='White'
    >
    </Message>
    <br />
    <br />
    <Message
      className='red-message'
      msgColor='red'
      msgContent='Red'
    >
    </Message>
    <br />
    <br />
    <Message
      className='orange-message'
      msgColor='orange'
      msgContent='Orange'
    >
    </Message>
    <br />
    <br />
    <Message
      className='blue-message'
      msgColor='blue'
      msgContent='Blue'
    >
    </Message>
    <br />
    <br />
    <Message
      className='pink-message'
      msgColor='pink'
      msgContent='Pink'
    >
    </Message>
    <br />
    <br />
    <Message
      className='black-message'
      msgColor='black'
      msgContent='Black'
    >
    </Message>
  </div>
);