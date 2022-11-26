import { createStyles, Avatar, Text, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  name: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
  root: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  element: {
    padding: theme.spacing.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.md,
    width: '100%',
  },
}))

interface UserInfoIconsProps {
  name?: string;
  title?: string;
  phone?: string;
  email?: string;
  avatar?: string;
}

const Card = ({ name, title, phone, email, avatar }: UserInfoIconsProps) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Group noWrap>
        <Avatar src={avatar} radius="md" size={350} />
        <div className={classes.element}>
          <Text size={15} sx={{ textTransform: 'uppercase' }} weight={700}>
            Title : {title}
          </Text>

          <Text size={15} weight={500} className={classes.name}>
            Name : {name}
          </Text>

          <Group noWrap spacing={10} mt={3}>
            <Text size={15}>
              Email : {email}
            </Text>
          </Group>

          <Group noWrap spacing={10} mt={5}>
            <Text size={15}>
              Phone : {phone}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
  )
}

export default Card