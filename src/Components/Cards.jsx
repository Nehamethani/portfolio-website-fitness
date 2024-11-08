import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
  } from "@material-tailwind/react";

const Cards = () => {
  return (
    <section className="flex flex justify-center  space-x-10">
    
        <Card className="max-w-[20rem] overflow-hidden bg-gray-50 text-gray-950">
        <CardBody className="p-4">
        <Typography variant="h4" className="text-lg">
          Personalized Training
        </Typography>
        <Typography className="mt-3 font-normal">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="personalized-training"
        />
      </CardHeader>
      
      
     
    </Card>
    <Card className="max-w-[20rem] overflow-hidden bg-gray-50 text-gray-950	">
    <CardBody className="p-4">
        <Typography className="text-lg">
          Specialized Program
        </Typography>
        <Typography className="mt-3 font-normal">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="personalized-training"
        />
      </CardHeader>
      
      
     
    </Card>
    <Card className="max-w-[20rem] overflow-hidden bg-gray-50 text-gray-950	">
    <CardBody className="p-4">
        <Typography className="text-lg">
         Nutrition Guidance
        </Typography>
        <Typography  className="mt-3 font-small ">
          Because it&apos;s about motivating the doers. Because I&apos;m here to
          follow my dreams and inspire others.
        </Typography>
      </CardBody>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="personalized-training"
        />
      </CardHeader>
      
      
     
    </Card>
  
    </section>
    
  )
}

export default Cards
