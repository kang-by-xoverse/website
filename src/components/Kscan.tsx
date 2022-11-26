import { createStyles, Text, Title, TextInput, Button, Image } from '@mantine/core'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  root: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
  },

  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl * 2,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  body: {
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
    width: '100%',
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
    fontSize: 48,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

const Kscan = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>
          <Text
            component="span"
            inherit
            // variant="gradient"
            // gradient={{ from: 'pink', to: 'yellow' }}
          >
            Lookup :
          </Text>
        </Title>
        <div className={classes.controls}>
          <TextInput
            size="xl"
            placeholder="Address"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Link to="/kscan/result">
            <Button
              // variant="gradient"
              // gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
            >Find</Button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Kscan