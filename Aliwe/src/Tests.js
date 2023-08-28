import React from 'react';
import MyFooter from './MyFooter';
import MyHeader from './MyHeader';
import './Tests.css';

function tests(){
    return(
        <div>
            <MyHeader/>
            <main>
                <h1>Artificial Intelligence</h1>
                    <form>
                        <div class="form-group">
                        <blockquote>
                        <h2>What is the main goal of artificial intelligence (AI)?</h2>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q1" id="q1a" value="a"/>
                            <label class="form-check-label" for="q1a">To create machines that can perform tasks requiring human intelligence</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q1" id="q1b" value="b"/>
                            <label class="form-check-label" for="q1b">To develop advanced computer algorithms</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q1" id="q1c" value="c"/>
                            <label class="form-check-label" for="q1c">To automate repetitive tasks</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q1" id="q1d" value="d"/>
                            <label class="form-check-label" for="q1d">To improve computational efficiency</label>
                        </div>
                        </blockquote>
                        <br/><br/><br/>
                        </div>
                    
                        
                        <div class="form-group">
                        <blockquote>
                        <h2>Who is known as the "Father of AI"?</h2>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2a" value="a"/>
                            <label class="form-check-label" for="q2a">Alan Turing</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2b" value="b"/>
                            <label class="form-check-label" for="q2b">John McCarthy</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2c" value="c"/>
                            <label class="form-check-label" for="q2c">Isaac Asimov</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2d" value="d"/>
                            <label class="form-check-label" for="q2d">Marvin Minsky</label>
                        </div>
                        </blockquote>
                        <br/><br/><br/>
                        </div>
                        
                        <div class="form-group">
                        <blockquote>
                            <h2>What is the Turing Test used for in the field of AI?</h2>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2a" value="a"/>
                            <label class="form-check-label" for="q2a">To measure the computational power of a machine</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2b" value="b"/>
                            <label class="form-check-label" for="q2b">To determine if a machine can think like a human</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2c" value="c"/>
                            <label class="form-check-label" for="q2c">To evaluate the accuracy of AI algorithms</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2d" value="d"/>
                            <label class="form-check-label" for="q2d">To assess the efficiency of AI systems</label>
                            </div>
                            </blockquote>
                        <br/><br/><br/>
                        </div>
                        
                        <div class="form-group">
                            <blockquote>
                            <h2>What is the end goal of artificial intelligence?</h2>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q1" id="q1a" value="a"/>
                            <label class="form-check-label" for="q1a">To create machines that can think like humans</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q1" id="q1b" value="b"/>
                            <label class="form-check-label" for="q1b">To automate all human tasks</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q1" id="q1c" value="c"/>
                            <label class="form-check-label" for="q1c">To replace human intelligence with machine intelligence</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q1" id="q1d" value="d"/>
                            <label class="form-check-label" for="q1d">To improve computational speed and accuracy</label>
                            </div>
                            </blockquote>
                        <br/><br/><br/>
                        </div>
                        
                        <div class="form-group">
                            <blockquote>
                            <h2>What is the philosophy of artificial intelligence concerned with?</h2>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2a" value="a"/>
                            <label class="form-check-label" for="q2a">Exploring the ethical implications of AI</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2b" value="b"/>
                            <label class="form-check-label" for="q2b">Understanding the nature of consciousness in machines</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2c" value="c"/>
                            <label class="form-check-label" for="q2c">Investigating the relationship between AI and free will</label>
                            </div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="q2" id="q2d" value="d"/>
                            <label class="form-check-label" for="q2d">All of the above</label>
                            </div>
                            </blockquote>
                        <br/><br/><br/>
                        </div>
                        
                        <div class="form-group">
                            <blockquote>
                            <h2>Can a machine act intelligently and solve problems like a human?</h2>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="q2" id="q2a" value="a"/>
                                <label class="form-check-label" for="q2a">Yes, machines can replicate human intelligence perfectly</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="q2" id="q2b" value="b"/>
                                <label class="form-check-label" for="q2b">No, machines can only perform predefined tasks</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="q2" id="q2c" value="c"/>
                                <label class="form-check-label" for="q2c">It is still a topic of debate and research in the field of AI</label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="q2" id="q2d" value="d"/>
                                <label class="form-check-label" for="q2d">Machines can surpass human intelligence in problem-solving</label>
                            </div>
                            </blockquote>
                        <br/><br/><br/>
                            </div>
                            
                            <div class="form-group">
                            <blockquote>
                                <h2>What is the purpose of the Turing Test in AI?</h2>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="q1" id="q1a" value="a"/>
                                <label class="form-check-label" for="q1a">To evaluate the computational power of a machine</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="q1" id="q1b" value="b"/>
                                <label class="form-check-label" for="q1b">To determine if a machine can mimic human responses</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="q1" id="q1c" value="c"/>
                                <label class="form-check-label" for="q1c">To measure the accuracy of AI algorithms</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="q1" id="q1d" value="d"/>
                                <label class="form-check-label" for="q1d">To assess the efficiency of AI systems</label>
                                </div>
                                </blockquote>
                        <br/><br/><br/>
                            </div>
                            
                            <div class="form-group">
                                <blockquote>
                                <h2>What is the role of natural language understanding in AI?</h2>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="q2" id="q2a" value="a"/>
                                <label class="form-check-label" for="q2a">To enable machines to understand and process human language</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="q2" id="q2b" value="b"/>
                                <label class="form-check-label" for="q2b">To improve the computational speed of AI algorithms</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="q2" id="q2c" value="c"/>
                                <label class="form-check-label" for="q2c">To automate repetitive tasks in language translation</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="q2" id="q2d" value="d"/>
                                <label class="form-check-label" for="q2d">To replace human communication with machine communication</label>
                                </div>
                                </blockquote>
                            <br/><br/><br/>
                            </div>
                            
                            
                            <div class="form-group">
                                <blockquote>
                                <h2>Can AI systems possess consciousness and self-awareness?</h2>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="q2" id="q2a" value="a"/>
                                    <label class="form-check-label" for="q2a">Yes, AI systems can develop consciousness over time</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="q2" id="q2b" value="b"/>
                                    <label class="form-check-label" for="q2b">No, consciousness is exclusive to human beings</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="q2" id="q2c" value="c"/>
                                    <label class="form-check-label" for="q2c">It is still a topic of philosophical debate and research</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="q2" id="q2d" value="d"/>
                                    <label class="form-check-label" for="q2d">AI systems can simulate consciousness but not possess it</label>
                                </div>
                                </blockquote>
                                <br/>
                                <br/>
                                <br/>
                                </div>

                                
                                <div class="form-group">
                                <blockquote>
                                    <h2>Which of the following is an application of artificial intelligence?</h2>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="q2" id="q2a" value="a"/>
                                    <label class="form-check-label" for="q2a">Playing chess
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="q2" id="q2b" value="b"/>
                                    <label class="form-check-label" for="q2b">Robotics</label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="q2" id="q2c" value="c"/>
                                    <label class="form-check-label" for="q2c">Self-Driving Cars</label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="q2" id="q2d" value="d"/>
                                    <label class="form-check-label" for="q2d">All of the above</label>
                                    </div>
                                    </blockquote>
                                <br/>
                                <br/>
                                <br/>
                                </div>
                
                        <button type="submit" class="button">Submit</button>
                    </form>
                </main>
            <MyFooter/>
        </div>
    );
}
export default tests;