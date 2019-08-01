// Import React
import React from 'react'
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
} from 'spectacle'
// Import theme
import createTheme from 'spectacle/lib/themes/default'
import sponsors from './sponsors.jpg'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={['zoom']}
          bgColor="primary"
          style={{ maxHeight: '100vh', maxWidth: '100vw' }}
        >
          <Image
            src={sponsors}
            width="100%"
            height="auto"
            style={{ maxHeight: '100vh', maxWidth: '100vw' }}
          />
        </Slide>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} caps lineHeight={1} textColor="secondary">
            Building a Mentoring Community Through Live Coding
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
            @JesseRWeigel
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Hi, I'm Jesse
          </Heading>
          <List>
            <ListItem>
              Senior Software Engineeer at Dick's Sporting Goods
            </ListItem>
            <ListItem>Volunteer Live Coder for freeCodeCamp</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Thank You!
          </Heading>
          <List>
            <ListItem>My wife's parents</ListItem>
            <ListItem>
              All Mid-Atlantic Developer Conference Organizers, Volunteers and
              Attendees
            </ListItem>
            <ListItem>freeCodeCamp, Quincy, Beau, and all my viewers</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            The Plan
          </Heading>
          <List>
            <ListItem>How I got started live coding</ListItem>
            <ListItem>What the community is like now</ListItem>
            <ListItem>What I have learned</ListItem>
            <ListItem>How you can start live coding</ListItem>
            <ListItem>Helpful advice and things to avoid</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How I got started live coding
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              "I make a lot of mistakes and I am a full time dev. Maybe it would
              be helpful for beginners to see that."
            </Quote>
            <Cite>Jesse</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Text size={6} textColor="secondary">
            My first streams were really bad and nobody watched.
          </Text>
          <span>-</span>
          <Text size={6} textColor="secondary">
            I asked for help on the freeCodeCamp forum.
          </Text>
          <span>-</span>
          <Text size={6} textColor="secondary">
            Started streaming for freeCodeCamp
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            What the community is like now
          </Heading>
          <List>
            <ListItem>All ages, locations, and skill levels</ListItem>
            <ListItem>Eager to learn and contribute</ListItem>
            <ListItem>Overwhelmingly Positive</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>"This is GOODDD!!!"</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>"AMAZING!!!! every day at 2pm yeeeessssss!!!!"</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote style={{ fontSize: '50px' }}>
              "I just wanted to comment on how patient and kind you are with
              people who only have negative and less than helpful feedback for
              the work you put together and shared on the web at no charge. If
              only the entire internet community were so nice!"
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              "​it's really good talking here. I have SA﻿ and usually don't talk
              much in chats but I feel good here. "
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>"Jesse is so darn humble."</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              "Jesse, you are talking too much! lets less talk more code"
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>
              "Tutorial doesn't actually start until about 8:30. You're welcome
              for saving 8 minutes of your life"
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>"1 hour and 43 mins still no code yet..."</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>"i can't watch 3 hours of video omg."</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>"crap"</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            What I have learned
          </Heading>
          <List>
            <ListItem>Live Coding as a form of mentorship works</ListItem>
            <ListItem>So much collaboration</ListItem>
            <ListItem>Confidence Building</ListItem>
            <ListItem>Viewers get jobs!</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            How you can start live coding
          </Heading>
          <List>
            <ListItem>Make a YouTube or Twitch channel</ListItem>
            <ListItem>Broadcast and share your screen (I use OBS)</ListItem>
            <ListItem>Start Coding!</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Hopefully Helpful Advice
          </Heading>
          <List>
            <ListItem>Adapt based on feedback</ListItem>
            <ListItem>Show your mistakes</ListItem>
            <ListItem>Show your face</ListItem>
            <ListItem>Don’t be afraid to say I don’t know</ListItem>
            <ListItem>
              It is ok to say nothing (or better yet, thank you) when someone
              tells you something that you already knew
            </ListItem>
            <ListItem>Always be positive and encouraging</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Give encouragement, not solutions</Quote>
            <Cite>Jesse</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Things to Avoid
          </Heading>
          <List>
            <ListItem>
              Talking badly about another language, framework, library, etc.
            </ListItem>
            <ListItem>
              Laughing at a question. (Assume every question is serious)
            </ListItem>
            <ListItem>Getting angry</ListItem>
            <ListItem>Coding and reading the chat at the same time</ListItem>
            <ListItem>
              Negativity (There is already enough negativity in the world)
            </ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Ask Me Anything!
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={6} bold>
            Watch me on the freeCodeCamp YouTube channel and on my channel
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={6} bold>
            Twitter: @JesseRWeigel
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={6} bold>
            Insta: jesse.weigel
          </Text>
        </Slide>
      </Deck>
    )
  }
}
