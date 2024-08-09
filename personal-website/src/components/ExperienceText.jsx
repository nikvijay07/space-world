


const ExperienceText = () => {

return (
    <section className='start'>
        <Suspense fallback={null}>
            <Canvas>
                <MainComponents />
                <Welcome />
                <InstructionalText />
                <Astronaut />
                <AboutMeText />
                <Button />
                <ProjectCube />
                <Links />
            </Canvas>
        </Suspense>
    </section>
    )

}

export default ExperienceText;