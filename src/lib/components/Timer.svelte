<script>
    import { ProgressRadial } from '@skeletonlabs/skeleton';
    let progress=50; 
</script>

<ProgressRadial ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" value={progress} font=40> {progress} % </ProgressRadial>