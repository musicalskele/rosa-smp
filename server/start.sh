#!/bin/bash

# Memory settings for the JVM
MEMORY_SETTINGS="-Xmx10G -Xms10G"

# Main JVM flags for performance tuning
MAIN_FLAGS="-XX:+UnlockExperimentalVMOptions \
-XX:+UnlockDiagnosticVMOptions \
-XX:+AlwaysActAsServerClassMachine \
-XX:+AlwaysPreTouch \
-XX:+DisableExplicitGC \
-XX:NmethodSweepActivity=1 \
-XX:ReservedCodeCacheSize=400M \
-XX:NonNMethodCodeHeapSize=12M \
-XX:ProfiledCodeHeapSize=194M \
-XX:NonProfiledCodeHeapSize=194M \
-XX:-DontCompileHugeMethods \
-XX:+PerfDisableSharedMem \
-XX:+UseFastUnorderedTimeStamps \
-XX:+UseCriticalJavaThreadPriority \
-XX:+EagerJVMCI \
-Dgraal.TuneInlinerExploration=1"

# Secondary JVM flags for garbage collection tuning
GC_FLAGS="-XX:+UseG1GC \
-XX:MaxGCPauseMillis=130 \
-XX:+UnlockExperimentalVMOptions \
-XX:+DisableExplicitGC \
-XX:+AlwaysPreTouch \
-XX:G1NewSizePercent=28 \
-XX:G1HeapRegionSize=16M \
-XX:G1ReservePercent=20 \
-XX:G1MixedGCCountTarget=3 \
-XX:InitiatingHeapOccupancyPercent=10 \
-XX:G1MixedGCLiveThresholdPercent=90 \
-XX:G1RSetUpdatingPauseTimePercent=0 \
-XX:SurvivorRatio=32 \
-XX:MaxTenuringThreshold=1 \
-XX:G1SATBBufferEnqueueingThresholdPercent=30 \
-XX:G1ConcMarkStepDurationMillis=5.0 \
-XX:G1ConcRefinementServiceIntervalMillis=150 \
-XX:G1ConcRSHotCardLimit=16 \
-XX:AllocatePrefetchStyle=3"

# Run the Packwiz installer to set up the server
echo "Running Packwiz installer..."
java -jar packwiz-installer-bootstrap.jar -g -s server https://raw.githubusercontent.com/musicalskele/rosa-smp/refs/heads/main/pack.toml

# Launch the server with the specified JVM flags
echo "Launching the server..."
java $MAIN_FLAGS $MEMORY_SETTINGS $GC_FLAGS -jar server.jar nogui
    