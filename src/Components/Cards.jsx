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
    <section className="flex flex-col lg:flex-row justify-center space-y-5 lg:space-y-0 lg:space-x-10">
    
    <Card className="max-w-[20rem] overflow-hidden bg-gray-50 text-gray-950	">
    <CardBody className="p-4">
        <Typography className="text-lg font-bold">
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
          src="https://www.grxstatic.com/4f3rgqwzdznj/2p2XouRFANL9uw1l4PmTif/386e4b03d7a73890023f90478a12873b/middle_aged_man_working_out_at_gym_with_trainer-852401638.jpg?format=pjpg&auto=webp"
          alt="personalized-training"
        />
      </CardHeader> 
    </Card>
    <Card className="max-w-[20rem] overflow-hidden bg-gray-50 text-gray-950	">
    <CardBody className="p-4 font-bold">
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
          src="https://media.istockphoto.com/id/1154771778/photo/close-up-of-unrecognizable-athlete-running-on-a-treadmill-in-a-gym.jpg?s=612x612&w=0&k=20&c=IiZuHMBelh5U0ztdJdFmGxAZzXvKOUHlVr4qd7Aon_s="
        />
      </CardHeader> 
    </Card>
    <Card className="max-w-[20rem] overflow-hidden bg-gray-50 text-gray-950	">
    <CardBody className="p-4">
        <Typography className="text-lg font-bold">
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
          src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/indian-diet-weight-loss-1296x728-feature.jpg"
          alt="personalized-training"
        />
      </CardHeader>
      
      
     
    </Card>
  
    </section>
    
  )
}

export default Cards
